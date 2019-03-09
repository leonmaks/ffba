DROP TABLE IF EXISTS ffba_pos_action_run CASCADE;

CREATE TABLE ffba_pos_action_run (
  id serial NOT NULL,
  pos_id integer NOT NULL,
  action_id integer NOT NULL,
  mode_id smallint NOT NULL,
  exec_dt timestamptz,
  status_id smallint NOT NULL,
  create_user_id  integer        NOT NULL,
  create_dt       timestamptz    NOT NULL,
  modify_user_id  integer,
  modify_dt       timestamptz,
  CONSTRAINT ffba_pos_action_run_pk PRIMARY KEY (id),
  CONSTRAINT ffba_pos_action_run_pos_id_fk FOREIGN KEY (pos_id)
    REFERENCES ffba_pos (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT ffba_pos_action_run_action_id_fk FOREIGN KEY (action_id)
    REFERENCES ffba_pos_action (id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT ffba_pos_action_run_mode_id_fk FOREIGN KEY (mode_id)
    REFERENCES ffba_pos_action_run_mode (id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT ffba_pos_action_run_status_id_fk FOREIGN KEY (status_id)
    REFERENCES ffba_pos_action_run_status (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

COMMIT;
