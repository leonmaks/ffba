SELECT
  to_char (s.sales_date::date, 'YYYY-MM-DD') AS sales_date,
  cr.identity AS cashreg_ident,
  cr.id AS cashreg_id,
  s.payment AS payment,
  SUM(s.expected_sales_value) AS exp_sv,
  SUM(s.actual_sales_value) AS act_sv,
  SUM(s.discount_value) AS dis_sv
FROM
  (
  SELECT
    identity,
    id,
    siteguid,
    show_order
  FROM
    ffba_cashreg
  UNION ALL
  SELECT
    ident,
    id,
    siteguid,
    show_order
  FROM
    ffba_pos
  ) AS cr,
  v$_product_sales s
WHERE
  cr.siteguid = s.siteguid
  AND s.sales_date::date between ${date_0} AND ${date_1}
GROUP BY
  s.sales_date::date,
  coalesce(cr.show_order, cr.identity),
  cr.identity,
  cr.id,
  s.payment
ORDER BY
  s.sales_date::date DESC,
  coalesce(cr.show_order, cr.identity),
  s.payment
