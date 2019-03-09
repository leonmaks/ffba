SELECT
  to_char (s.sales_date::date, 'YYYY-MM-DD') AS sales_date,
  p.identity AS cashreg_ident,
  p.id AS cashreg_id,
  s.payment AS payment,
  SUM(s.expected_sales_value) AS exp_sv,
  SUM(s.actual_sales_value) AS act_sv,
  SUM(s.discount_value) AS dis_sv
FROM
  v$_ffba_pos p,
  v$_product_sales s
WHERE
  p.siteguid = s.siteguid
  AND s.sales_date::date between ${date_0} AND ${date_1}
GROUP BY
  s.sales_date::date,
  coalesce(p.show_order, p.identity),
  p.identity,
  p.id,
  s.payment
ORDER BY
  s.sales_date::date DESC,
  coalesce(p.show_order, p.identity),
  s.payment
