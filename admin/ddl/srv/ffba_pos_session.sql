DROP TABLE IF EXISTS ffba_pos_session CASCADE;

CREATE TABLE ffba_pos_session (
  id bigserial NOT NULL,
  pos_id integer NOT NULL,
  begin_dt timestamptz NOT NULL,
  end_dt timestamptz,
  code varchar(255),
  out text,
  err text,
  CONSTRAINT ffba_pos_session_pk PRIMARY KEY (id),
  CONSTRAINT ffba_pos_session_pos_id_fk FOREIGN KEY (pos_id)
    REFERENCES ffba_pos (id) ON DELETE CASCADE ON UPDATE CASCADE
);

COMMIT;
