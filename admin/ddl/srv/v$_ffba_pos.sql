DROP VIEW IF EXISTS v$_ffba_pos CASCADE;

CREATE VIEW v$_ffba_pos AS
SELECT
  ident AS pos_ident,
  id AS pos_id,
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
