DROP VIEW IF EXISTS v$_ffba_orgunit_sales CASCADE;

CREATE VIEW v$_ffba_orgunit_sales AS
SELECT
  s.siteguid,
  s.product_ref,
  s.product_name,
  s.sales_date,
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
  p.pos_ident,
  p.pos_id,
  p.show_order AS pos_show_order,
  o.id AS orgunit_id,
  o.name AS orgunit_name,
  o.up_id AS orgunit_up_id,
  o.show_order orgunit_show_order,
  ov.fd AS pos_orgunit_fd,
  ov.td AS pos_orgunit_td
FROM
  v$_ffba_product_sales s
LEFT JOIN
  v$_ffba_pos p
  ON p.siteguid = s.siteguid
LEFT JOIN
  v$_ffba_pos_orgunit_ver ov
  ON p.siteguid = ov.siteguid
    AND s.sales_date >= ov.fd AND s.sales_date < COALESCE(ov.td, '9999-12-31 23:59:59.999999+03'::timestamp with time zone)
LEFT OUTER JOIN
  ffba_orgunit o
  ON ov.orgunit_id = o.id
;

COMMIT;
