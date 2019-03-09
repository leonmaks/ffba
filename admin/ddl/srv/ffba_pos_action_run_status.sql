DROP TABLE IF EXISTS ffba_pos_action_run_status CASCADE;

CREATE TABLE ffba_pos_action_run_status (
   id          smallint       NOT NULL,
   name        varchar(255)   NOT NULL,
   CONSTRAINT ffba_pos_action_run_status_pk PRIMARY KEY (id),
   CONSTRAINT ffba_pos_action_run_status_name_uk UNIQUE (name)
);

INSERT INTO ffba_pos_action_run_status (id, name) VALUES (1, 'Active');
INSERT INTO ffba_pos_action_run_status (id, name) VALUES (2, 'Done');
INSERT INTO ffba_pos_action_run_status (id, name) VALUES (3, 'On hold');

COMMIT;
