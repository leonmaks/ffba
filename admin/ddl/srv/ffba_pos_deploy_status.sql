DROP TABLE IF EXISTS ffba_pos_deploy_status CASCADE;

CREATE TABLE ffba_pos_deploy_status
(
   id          smallint       NOT NULL,
   name        varchar(255)   NOT NULL,
   CONSTRAINT ffba_pos_deploy_status_pk PRIMARY KEY (id),
   CONSTRAINT ffba_pos_deploy_status_name_uk UNIQUE (name)
);

INSERT INTO ffba_pos_deploy_status (id, name) VALUES (1, 'No action');
INSERT INTO ffba_pos_deploy_status (id, name) VALUES (2, 'To deploy');
INSERT INTO ffba_pos_deploy_status (id, name) VALUES (3, 'Deployed');
INSERT INTO ffba_pos_deploy_status (id, name) VALUES (4, 'To delete');
INSERT INTO ffba_pos_deploy_status (id, name) VALUES (5, 'Deleted');
INSERT INTO ffba_pos_deploy_status (id, name) VALUES (6, 'Error');

COMMIT;
