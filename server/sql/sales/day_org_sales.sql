SELECT
  *
FROM
  v$_ffba_orgunit_sales s
WHERE orgunit_id = ${orgId}
  AND sales_date::date = '${year^}-${mon^}-${day^}'
