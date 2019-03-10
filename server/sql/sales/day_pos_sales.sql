SELECT
  *
FROM
  v$_ffba_orgunit_sales s
WHERE pos_id = ${posId}
  AND sales_date::date = '${year^}-${mon^}-${day^}'
