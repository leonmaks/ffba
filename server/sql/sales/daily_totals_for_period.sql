SELECT
  to_char (s.sales_date::date, 'YYYY-MM-DD') AS sales_date,
  s.orgunit_name,
  s.orgunit_id,
  p.identity AS cashreg_ident,
  p.id AS cashreg_id,
  s.payment AS payment,
  SUM(s.expected_sales_value) AS exp_sv,
  SUM(s.actual_sales_value) AS act_sv,
  SUM(s.discount_value) AS dis_sv
FROM
  v$_ffba_pos p,
  v$_ffba_orgunit_sales s
WHERE
  p.siteguid = s.siteguid
GROUP BY
  s.sales_date::date,
  coalesce(s.orgunit_show_order, s.orgunit_id::text),
  coalesce(p.show_order, p.identity),
  p.identity,
  p.id,
  s.orgunit_id,
  s.orgunit_name,
  s.payment
ORDER BY
  s.sales_date::date DESC,
  coalesce(s.orgunit_show_order, s.orgunit_id::text),
  coalesce(p.show_order, p.identity),
  s.payment
