SELECT
  s.siteguid,
  s.product_ref,
  s.product_name,
  to_char(s.sales_date, 'YYYY-MM-DD HH24:MI:SS') AS sales_date,
  s.units,
  s.total_units,
  s.list_price,
  s.actual_price,
  s.fractional_flag,
  s.expected_sales_value,
  s.actual_sales_value,
  s.discount_value,
  s.discount_rate,
  s.payment,
  s.pos_ident,
  s.pos_id,
  s.pos_show_order,
  s.orgunit_id,
  s.orgunit_name,
  s.orgunit_up_id,
  s.orgunit_show_order,
  s.pos_orgunit_fd,
  s.pos_orgunit_td
FROM
  v$_ffba_orgunit_sales s
WHERE orgunit_id = ${orgId}
  AND sales_date::date = '${year^}-${mon^}-${day^}'
