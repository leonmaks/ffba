const db = require("@db")


const Sales = {}

Sales.dailyTotalsForPeriod = async (date0 = null, date1 = null) => db.any(
  "SELECT s.sales_date::date AS sales_date,"
  + " cr.identity AS cashreg_ident,"
  + " cr.id AS cashreg_id,"
  + " s.payment AS payment,"
  + " SUM(s.expected_sales_value) AS exp_sv,"
  + " SUM(s.actual_sales_value) AS act_sv,"
  + " SUM(s.discount_value) AS dis_sv"
  + " FROM ffba_cashreg cr, v$_product_sales s"
  + " WHERE cr.siteguid = s.siteguid"
  // " AND s.sales_date::date >= %s"
  // " AND s.sales_date::date <= %s"
  + " GROUP BY s.sales_date::date, coalesce(cr.show_order, cr.identity), cr.identity, cr.id, s.payment"
  + " ORDER BY s.sales_date::date DESC, coalesce(cr.show_order, cr.identity), s.payment",
)


module.exports = Sales
