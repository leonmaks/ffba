import React, { Component } from "react"
import moment from "moment"
import { sprintf } from "sprintf-js"

import { sort } from "helpers/dicarray"
import { integerFormat, moneyFormat, percentFormat } from "helpers/report"

import { get } from "rest/rp"
import { sales } from "rest/defs"

import Mux from "components/common/Mux"
import Table from "components/common/Table"


class DayOrgSales extends Component {
  state = {
    day_sales: { records: [] },
  }

  __prepare_details = (data) => {

    const totals = []
    const products = []
    const records = []

    const tc_ = {
      units: 0,
      act_sv: 0.0,
      exp_sv: 0.0,
      dis_sv: 0.0,
      fra_units: 0,
      fra_act_sv: 0.0,
      fra_exp_sv: 0.0,
      fra_dis_sv: 0.0,
    }
    const prod_calcs_ = {}

    data.forEach((r_, i) => {

      let units_ = parseFloat(r_.units)
      let price_ = parseFloat(r_.list_price)

      let act_sv_ = parseFloat(r_.actual_sales_value)
      let exp_sv_ = parseFloat(r_.expected_sales_value)
      let dis_sv_ = parseFloat(r_.discount_value)

      let fra_units_ = 0
      let fra_act_sv_ = 0.0
      let fra_exp_sv_ = 0.0
      let fra_dis_sv_ = 0.0

      if (r_.fractional_flag) {

        //
        // FRACTIONAL

        units_ = fra_units_ = Math.ceil(units_)
        fra_act_sv_ = act_sv_
        fra_exp_sv_ = fra_units_ * price_
        fra_dis_sv_ = fra_exp_sv_ - act_sv_

        exp_sv_ = fra_exp_sv_
        dis_sv_ = 0

      }

      //
      // PRODUCT

      let p_ = prod_calcs_[r_.product_name]
      if (!p_) p_ = prod_calcs_[r_.product_name] = {
        units: 0,
        price: price_,
        act_sv: 0.0,
        exp_sv: 0.0,
        dis_sv: 0.0,
        fra_units: 0,
        fra_exp_sv: 0.0,
        fra_dis_sv: 0.0,
        product_ref: r_.product_ref,
      }

      p_.units += units_
      p_.act_sv += act_sv_
      p_.exp_sv += exp_sv_
      p_.dis_sv += dis_sv_
      p_.fra_units += fra_units_
      p_.fra_exp_sv += fra_exp_sv_
      p_.fra_dis_sv += fra_dis_sv_

      tc_.units += units_
      tc_.act_sv += act_sv_
      tc_.exp_sv += exp_sv_
      tc_.dis_sv += dis_sv_
      tc_.fra_units += fra_units_
      tc_.fra_act_sv += fra_act_sv_
      tc_.fra_exp_sv += fra_exp_sv_
      tc_.fra_dis_sv += fra_dis_sv_


      //
      // RECORD

      records.push({
        values: [
          { value: moment(r_.sales_date).format("HH:mm:ss") },
          { value: r_.product_name },
          { value: integerFormat(units_) },
          { value: moneyFormat(price_) },
          { value: moneyFormat(act_sv_) },
          { value: moneyFormat(exp_sv_) },
          { value: percentFormat((1.0 - r_.discount_rate) * 100) },
          { value: moneyFormat(dis_sv_) },
          { value: integerFormat(fra_units_) },
          { value: moneyFormat(fra_dis_sv_) },
          { value: r_.product_ref },
        ],
      })
    })


    totals.push({
      values: [
        { value: integerFormat(tc_.units) },
        { value: moneyFormat(tc_.act_sv) },
        { value: moneyFormat(tc_.exp_sv) },
        { value: moneyFormat(tc_.dis_sv) },
        { value: integerFormat(tc_.fra_units) },
        { value: moneyFormat(tc_.fra_act_sv) },
        { value: moneyFormat(tc_.fra_exp_sv) },
        { value: moneyFormat(tc_.fra_dis_sv) },
      ],
    })


    for (const [pn_, pv_] of Object.entries(sort(prod_calcs_, "act_sv", true))) {
      products.push({
        values: [
          { value: pn_ },
          { value: integerFormat(pv_.units) },
          { value: moneyFormat(pv_.price) },
          { value: moneyFormat(pv_.act_sv) },
          { value: moneyFormat(pv_.exp_sv) },
          { value: moneyFormat(pv_.dis_sv) },
          { value: integerFormat(pv_.fra_units) },
          { value: moneyFormat(pv_.fra_exp_sv) },
          { value: moneyFormat(pv_.fra_dis_sv) },
          { value: pv_.product_ref },
        ],
      })
    }

    return { totals, products, records }
  }

  componentDidMount() {
    get(sprintf(sales.DAY_ORG_SALES, this.props.match.params), { json: true }).then(res => {
      if (res.day_sales) {
        this.setState({ day_sales: this.__prepare_details(res.day_sales) })
      }
    })
  }

  render() {

    const report_ = {
      totals: {
        classes: "table-striped table-sm",
        headings: [
          { name: "Un." },
          { name: "Act.S.V." },
          { name: "Exp.S.V." },
          { name: "Dis.Los.S.V." },
          { name: "Fr.Un." },
          { name: "Fr.Act.S.V." },
          { name: "Fr.Exp.S.V." },
          { name: "Fr.Los.S.V." },
        ],
      },
      products: {
        classes: "table-striped table-sm",
        headings: [
          { name: "Product Name" },
          { name: "Un." },
          { name: "Price" },
          { name: "Act.S.V." },
          { name: "Exp.S.V." },
          { name: "Los.S.V." },
          { name: "Fr.Un." },
          { name: "Fr.Exp.S.V." },
          { name: "Fr.Los.S.V." },
          { name: "Prod.#" },
        ],
      },
      records: {
        classes: "table-striped table-sm",
        headings: [
          { name: "Product Name" },
          { name: "Un." },
          { name: "Price" },
          { name: "Act.S.V." },
          { name: "Exp.S.V." },
          { name: "Los.S.V." },
          { name: "Fr.Un." },
          { name: "Fr.Exp.S.V." },
          { name: "Fr.Los.S.V." },
          { name: "Prod.#" },
        ],
      },
    }

    return (
      <Mux>
        <h3>Totals</h3>
        <div className="table-responsive">
          <Table
            classes={report_.totals.classes}
            headings={report_.totals.headings}
            rows={this.state.day_sales.totals}
          />
        </div>
        <h3>Day Sales by Products</h3>
        <div className="table-responsive">
          <Table
            classes={report_.products.classes}
            headings={report_.products.headings}
            rows={this.state.day_sales.products}
          />
        </div>
        <h3>Day Sales Records</h3>
        <div className="table-responsive">
          <Table
            classes={report_.records.classes}
            headings={report_.records.headings}
            rows={this.state.day_sales.records}
          />
        </div>
      </Mux>
    )
  }
}


export default DayOrgSales
