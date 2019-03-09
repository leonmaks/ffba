DROP TABLE IF EXISTS ffba_pos_package CASCADE;

CREATE TABLE ffba_pos_package
(
   id              serial         NOT NULL,
   name            varchar(255)   NOT NULL,
   create_user_id  integer        NOT NULL,
   create_dt       timestamptz    NOT NULL,
   modify_user_id  integer,
   modify_dt       timestamptz,
   CONSTRAINT ffba_pos_package_pk PRIMARY KEY (id),
   CONSTRAINT ffba_pos_package_name_uk UNIQUE (name)
);

COMMIT;
