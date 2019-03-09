DROP TABLE IF EXISTS ffba_pos_action CASCADE;

CREATE TABLE ffba_pos_action (
  id serial NOT NULL,
  name varchar(255) NOT NULL,
  type_id smallint NOT NULL,
  "module" varchar(255),
  command text,
  create_user_id  integer        NOT NULL,
  create_dt       timestamptz    NOT NULL,
  modify_user_id  integer,
  modify_dt       timestamptz,
  CONSTRAINT ffba_pos_action_pk PRIMARY KEY (id),
  CONSTRAINT ffba_pos_action_name_uk UNIQUE (name),
  CONSTRAINT ffba_pos_action_type_id_fk FOREIGN KEY (type_id)
    REFERENCES ffba_pos_action_type (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

INSERT INTO ffba_pos_action (name, type_id, command, create_user_id, create_dt)
  VALUES ('Task Mgr - Install', 1, '.\admin\task\create.bat', 2, now());
INSERT INTO ffba_pos_action (name, type_id, command, create_user_id, create_dt)
  VALUES ('Task Mgr - Status', 1, '.\admin\task\status.bat', 2, now());

COMMIT;
