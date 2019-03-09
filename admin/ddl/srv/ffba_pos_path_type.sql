DROP TABLE IF EXISTS ffba_pos_path_type CASCADE;

CREATE TABLE ffba_pos_path_type
(
   id          smallint       NOT NULL,
   name        varchar(255)   NOT NULL,
   CONSTRAINT ffba_pos_path_type_pk PRIMARY KEY (id),
   CONSTRAINT ffba_pos_path_type_name_uk UNIQUE (name)
);

INSERT INTO ffba_pos_path_type (id, name) VALUES (1, 'File');
INSERT INTO ffba_pos_path_type (id, name) VALUES (2, 'Directory');

COMMIT;
