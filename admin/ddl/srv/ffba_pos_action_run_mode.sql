DROP TABLE IF EXISTS ffba_pos_action_run_mode CASCADE;

CREATE TABLE ffba_pos_action_run_mode (
   id          smallint       NOT NULL,
   name        varchar(255)   NOT NULL,
   CONSTRAINT ffba_pos_action_run_mode_pk PRIMARY KEY (id),
   CONSTRAINT ffba_pos_action_run_mode_name_uk UNIQUE (name)
);

INSERT INTO ffba_pos_action_run_mode (id, name) VALUES (1, 'Once');
INSERT INTO ffba_pos_action_run_mode (id, name) VALUES (2, 'Multiple');

COMMIT;
