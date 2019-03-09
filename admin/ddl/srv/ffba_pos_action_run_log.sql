DROP TABLE IF EXISTS ffba_pos_action_run_log CASCADE;

CREATE TABLE ffba_pos_action_run_log (
  id bigserial NOT NULL,
  run_id integer NOT NULL,
  start_dt timestamptz,
  end_dt timestamptz,
  code varchar(255),
  out text,
  err text,
  CONSTRAINT ffba_pos_action_run_log_pk PRIMARY KEY (id),
  CONSTRAINT ffba_pos_action_run_log_run_id_fk FOREIGN KEY (run_id)
    REFERENCES ffba_pos_action_run (id) ON DELETE CASCADE ON UPDATE CASCADE
);

COMMIT;
