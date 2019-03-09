DROP TABLE IF EXISTS ffba_pos CASCADE;

CREATE TABLE ffba_pos
(
   id                 serial         NOT NULL,
   root_orgunit_id    integer        NOT NULL,
   ident              varchar(255)   NOT NULL,
   connection_uri     varchar(255)   NOT NULL,
   srv_table_pfx      varchar(255)   NOT NULL,
   siteguid           varchar(255),
   is_active          boolean,
   create_user_id     integer        NOT NULL,
   create_dt          timestamptz    NOT NULL,
   modify_user_id     integer,
   modify_dt          timestamptz,
  CONSTRAINT ffba_pos_pk PRIMARY KEY (id),
  CONSTRAINT ffba_pos_ident_uk UNIQUE (ident),
  CONSTRAINT ffba_pos_srv_table_pfx_uk UNIQUE (srv_table_pfx),
  CONSTRAINT ffba_pos_siteguid_uk UNIQUE (siteguid),
  CONSTRAINT ffba_pos_root_orgunit_id_fk FOREIGN KEY (root_orgunit_id)
    REFERENCES ffba_orgunit(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO ffba_pos (id, root_orgunit_id, ident, connection_uri, srv_table_pfx, create_user_id, create_dt)
  VALUES (0, 3, 'elta_00000', 'postgres://eltapos_095:e__@localhost:5533/eltapos_095', '003_00000', 2, now());

COMMIT;
