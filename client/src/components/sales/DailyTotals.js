import React, { Component } from "react"
import { get } from "rest/rp"

import { sales } from "rest/defs"

import Mux from "components/common/Mux"
import Table from "components/common/Table"


class DailyTotals extends Component {
  state = {
    totals: [],
  }

  prepareState = (rows) => {

    let sd_ = { ident: null, totals: [0, 0, 0], rows: [] }
    let un_ = { ident: null, totals: [0, 0, 0], rows: [], link: null }
    let pm_ = { ident: null, totals: [0, 0, 0], rows: [] }

    rows.forEach((r, i) => {

      r.unit_ident = `${r.orgunit_name || "Undefined"} | ${r.pos_ident}`

      if (sd_.ident !== r["sales_date"] || un_.ident !== r["unit_ident"] || pm_.ident !== r["payment"]) {

        // Payment
        if (pm_.ident) {
          pm_.rows.push({
            values: [
              { value: "" },
              { value: "" },
              { value: pm_.ident },
              { value: pm_.totals[0].toFixed(2) },
              { value: pm_.totals[1].toFixed(2) },
              { value: pm_.totals[2].toFixed(2) }
            ],
            key: sd_.ident + "|" + un_.ident + "!" + pm_.ident
          })
        }
        pm_.ident = r["payment"]
        pm_.totals = [0, 0, 0]
      }

      if (sd_.ident !== r["sales_date"] || un_.ident !== r["unit_ident"]) {

        // POS
        if (un_.ident) {
          un_.rows.push({
            values: [
              { value: "" },
              { value: "", collapsible: true },
              { value: un_.ident, link: un_.link },
              { value: un_.totals[0].toFixed(2) },
              { value: un_.totals[1].toFixed(2) },
              { value: un_.totals[2].toFixed(2) }
            ],
            group: { rows: pm_.rows },
            // group: { rows: pm_.rows, hidden: true },
            key: sd_.ident + "|" + un_.ident
          })
          pm_.rows = []
        }
        un_.ident = r["unit_ident"]
        un_.link = "/sales/day/" + r["sales_date"] + "/org/" + r["orgunit_id"]
        un_.totals = [0, 0, 0]
      }

      if (sd_.ident !== r["sales_date"]) {
        // Sales Date
        if (sd_.ident) {
          sd_.rows.push({
            values: [
              { value: "", collapsible: true },
              { value: "" },
              { value: sd_.ident },
              { value: sd_.totals[0].toFixed(2) },
              { value: sd_.totals[1].toFixed(2) },
              { value: sd_.totals[2].toFixed(2) }
            ],
            group: { rows: un_.rows },
            // group: { rows: un_.rows, hidden: true },
            key: sd_.ident
          })
          un_.rows = []
        }
        sd_.ident = r["sales_date"]
        sd_.totals = [0, 0, 0]
      }

      sd_.totals = [sd_.totals[0] + r["act_sv"], sd_.totals[1] + r["exp_sv"], sd_.totals[2] + r["dis_sv"]]
      un_.totals = [un_.totals[0] + r["act_sv"], un_.totals[1] + r["exp_sv"], un_.totals[2] + r["dis_sv"]]
      pm_.totals = [pm_.totals[0] + r["act_sv"], pm_.totals[1] + r["exp_sv"], pm_.totals[2] + r["dis_sv"]]
    })

    // Payment (last)
    if (pm_.ident) {
      pm_.rows.push({
        values: [
          { value: "" },
          { value: "" },
          { value: pm_.ident },
          { value: pm_.totals[0].toFixed(2) },
          { value: pm_.totals[1].toFixed(2) },
          { value: pm_.totals[2].toFixed(2) }
        ],
        key: sd_.ident + "|" + un_.ident + "!" + pm_.ident
      })
    }

    // POS (last)
    if (un_.ident) {
      un_.rows.push({
        values: [
          { value: "" },
          { value: "", collapsible: true },
          { value: un_.ident, link: un_.link },
          { value: un_.totals[0].toFixed(2) },
          { value: un_.totals[1].toFixed(2) },
          { value: un_.totals[2].toFixed(2) }
        ],
        group: { rows: pm_.rows },
        // group: { rows: pm_.rows, hidden: true },
        key: sd_.ident + "|" + un_.ident
      })
      pm_.rows = []
    }

    // Sales Date (last)
    if (sd_.ident) {
      sd_.rows.push({
        values: [
          { value: "", collapsible: true },
          { value: "" },
          { value: sd_.ident },
          { value: sd_.totals[0].toFixed(2) },
          { value: sd_.totals[1].toFixed(2) },
          { value: sd_.totals[2].toFixed(2) }
        ],
        group: { rows: un_.rows },
        // group: { rows: un_.rows, hidden: true },
        key: sd_.ident
      })
      un_.rows = []
    }
    return { rows: sd_.rows }
  }

  componentDidMount() {

    get(sales.DAILY_TOTALS_FOR_PERIOD, { json: true }).then(res => {
      if (res.daily_totals) {
        this.setState({ totals: this.prepareState(res.daily_totals) })
      }
    })

    // const options_ = {
    //   uri: `${SERVER_URL}${API_ROUTE_DAILY_TOTALS_FOR_PERIOD}`,
    //   headers: {
    //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJGRkJBIiwic3ViIjoxLCJpYXQiOjE1NTE5MDM1Nzg2MTIsImV4cCI6MTU1MTk4OTk3ODYxMn0.LFAz-sg1LUNIufFxnjwbCoihh81_7vCks6-KJZEtl_E"
    //   },
    //   json: true // Automatically parses the JSON string in the response
    // }

    // rp(options_).then(response => {
    //   console.log("response=", response)
    //   if (response.daily_totals) {
    //     this.setState({ totals: this.prepareState(response.daily_totals) })
    //   }
    // })

    // axios.get(`${SERVER_URL}${API_ROUTE_DAILY_TOTALS_FOR_PERIOD}`).then(
    //     response => {
    //       if (response.data.daily_totals) {
    //         this.setState({ totals: this.prepareState(response.data.daily_totals) })
    //       }
    //     }
    //   )
  }

  render() {

    const data = {
      totals: {
        classes: "table-striped table-sm",
        headings: [
          { name: "", style: { width: "1.4em" } },
          { name: "", style: { width: "1.4em" } },
          { name: "Dimension" },
          { name: "Act.S.V." },
          { name: "Exp.S.V." },
          { name: "Dis.S.V." },
        ],
      }
    }

    return (
      <Mux>
        <h1>Totals by Date</h1>
        <div className="table-responsive">
          <Table classes={data.totals.classes} headings={data.totals.headings} rows={this.state.totals.rows} />
        </div>
      </Mux>
    )
  }
}


export default DailyTotals
