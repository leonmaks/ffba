CREATE OR REPLACE
VIEW v$_ffba_pos AS
SELECT
  ident AS identity,
  id,
  siteguid,
  show_order
FROM
  ffba_pos
UNION ALL
SELECT
  identity,
  id,
  siteguid,
  show_order
FROM
  ffba_cashreg
;

COMMIT;
