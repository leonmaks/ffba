DROP TABLE IF EXISTS ffba_pos_path CASCADE;

CREATE TABLE ffba_pos_path
(
   id              serial         NOT NULL,
   up_id           integer,
   package_id      integer,
   type_id         smallint       NOT NULL,
   dir             varchar(255),
   file            varchar(255),
   content         text,
   create_user_id  integer        NOT NULL,
   create_dt       timestamptz    NOT NULL,
   modify_user_id  integer,
   modify_dt       timestamptz,
   CONSTRAINT ffba_pos_path_pk PRIMARY KEY (id),
   CONSTRAINT ffba_pos_path_up_id_fk FOREIGN KEY (up_id)
      REFERENCES ffba_pos_path (id) ON DELETE CASCADE ON UPDATE CASCADE,
   CONSTRAINT ffba_pos_path_package_id_fk FOREIGN KEY (package_id)
      REFERENCES ffba_pos_package (id) ON DELETE CASCADE ON UPDATE CASCADE,
   CONSTRAINT ffba_pos_path_type_id_fk FOREIGN KEY (type_id)
      REFERENCES ffba_pos_path_type (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

COMMIT;
