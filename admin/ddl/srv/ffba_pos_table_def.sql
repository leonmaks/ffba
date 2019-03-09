DROP TABLE IF EXISTS ffba_pos_table_def CASCADE;

CREATE TABLE ffba_pos_table_def (
  id serial NOT NULL,
  pos_id integer,
  table_name varchar(255) NOT NULL,
  ident_cols varchar(255),
  insert_order varchar(255),
  create_user_id integer NOT NULL,
  create_dt timestamptz NOT NULL,
  modify_user_id integer,
  modify_dt timestamptz,
  CONSTRAINT ffba_pos_table_def_pk PRIMARY KEY (id),
  CONSTRAINT ffba_pos_table_def_pos_id_fk FOREIGN KEY (pos_id)
    REFERENCES ffba_pos(id) ON DELETE CASCADE ON UPDATE CASCADE
);

GRANT SELECT ON ffba_pos_table_def TO ffba_pos;

COMMIT;
