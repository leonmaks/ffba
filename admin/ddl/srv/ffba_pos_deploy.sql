DROP TABLE IF EXISTS ffba_pos_deploy CASCADE;

CREATE TABLE ffba_pos_deploy
(
   id              serial        NOT NULL,
   pos_id          integer       NOT NULL,
   package_id      integer       NOT NULL,
   path_id         integer,
   status_id       smallint      NOT NULL,
   create_user_id  integer       NOT NULL,
   create_dt       timestamptz   NOT NULL,
   modify_user_id  integer,
   modify_dt       timestamptz,
   CONSTRAINT ffba_pos_deploy_pk PRIMARY KEY (id),
   CONSTRAINT ffba_pos_deploy_pos_id_fk FOREIGN KEY (pos_id)
      REFERENCES ffba_pos (id) ON DELETE CASCADE ON UPDATE CASCADE,
   CONSTRAINT ffba_pos_deploy_package_id_fk FOREIGN KEY (package_id)
      REFERENCES ffba_pos_package (id) ON DELETE CASCADE ON UPDATE CASCADE,
   CONSTRAINT ffba_pos_deploy_path_id_fk FOREIGN KEY (path_id)
      REFERENCES ffba_pos_path (id) ON DELETE CASCADE ON UPDATE CASCADE,
   CONSTRAINT ffba_pos_deploy_status_id_fk FOREIGN KEY (status_id)
      REFERENCES ffba_pos_deploy_status (id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

COMMIT;
