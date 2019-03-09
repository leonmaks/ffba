DROP TABLE IF EXISTS ffba_pos_orgunit_ver CASCADE;

CREATE TABLE ffba_pos_orgunit_ver
(
  id              serial        NOT NULL,
  pos_id          integer       NOT NULL,
  orgunit_id      integer       NOT NULL,
  create_user_id     integer        NOT NULL,
  create_dt          timestamptz    NOT NULL,
  modify_user_id     integer,
  modify_dt          timestamptz,
  fd timestamptz NOT NULL,
  td timestamptz,
CONSTRAINT ffba_pos_orgunit_ver_pk PRIMARY KEY (id),
CONSTRAINT ffba_pos_orgunit_ver_pos_id_fk FOREIGN KEY (pos_id)
  REFERENCES ffba_pos (id) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT ffba_pos_orgunit_ver_orgunit_id_fk FOREIGN KEY (orgunit_id)
  REFERENCES ffba_orgunit (id) ON DELETE CASCADE ON UPDATE CASCADE
);

COMMIT;
