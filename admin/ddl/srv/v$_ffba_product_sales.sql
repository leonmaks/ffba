CREATE OR REPLACE
VIEW v$_ffba_product_sales AS
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
  s.total_units * s.list_price AS expected_sales_value,
  s.units * s.actual_price AS actual_sales_value,
  s.total_units * s.list_price - s.units * s.actual_price AS discount_value,
  CASE
    WHEN s.total_units <> 0::double precision
    AND s.list_price <> 0::double precision
    THEN s.units * s.actual_price / (s.total_units * s.list_price)
    ELSE '-1'::integer::double precision
  END AS discount_rate,
  s.payment
FROM
  "v$_ffba_product_sales_raw" s
;

COMMIT;
