DROP TABLE IF EXISTS ffba_pos_repl_table CASCADE;

CREATE TABLE ffba_pos_repl_table (
  id serial NOT NULL,
  pos_id integer NOT NULL,
  table_name varchar(255) NOT NULL,
  repl_up_table_name varchar(255),
  repl_down_table_name varchar(255),
  last_repl_up_id bigint,
  last_repl_up_dt timestamptz,
  last_repl_down_id bigint,
  last_repl_down_dt timestamptz,
  last_upld_srv_id bigint,
  last_upld_srv_dt timestamptz,
  CONSTRAINT ffba_pos_repl_table_pk PRIMARY KEY (id),
  CONSTRAINT ffba_pos_repl_table_pos_id_fk FOREIGN KEY (pos_id)
    REFERENCES ffba_pos(id) ON DELETE CASCADE ON UPDATE CASCADE
);

GRANT ALL ON ffba_pos_repl_table TO ffba_pos;
GRANT USAGE, SELECT ON SEQUENCE ffba_pos_repl_table_id_seq TO ffba_pos;

COMMIT;
