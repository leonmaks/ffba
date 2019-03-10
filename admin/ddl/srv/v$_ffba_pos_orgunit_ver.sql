DROP VIEW IF EXISTS v$_ffba_pos_orgunit_ver CASCADE;

CREATE OR REPLACE VIEW public."v$_ffba_pos_orgunit_ver"
AS SELECT p.ident AS pos_ident,
    p.siteguid,
    p.show_order,
    ov.orgunit_id,
    ov.fd,
    ov.td
   FROM ffba_pos p
     LEFT JOIN ffba_pos_orgunit_ver ov ON p.id = ov.pos_id
UNION ALL
 SELECT p.identity,
    p.siteguid,
    p.show_order,
    ov.orgunit_id,
    ov.fd,
    ov.td
   FROM ffba_cashreg p
     LEFT JOIN ffba_cashreg_orgunit_ver ov ON p.id = ov.cashreg_id
;

COMMIT;
