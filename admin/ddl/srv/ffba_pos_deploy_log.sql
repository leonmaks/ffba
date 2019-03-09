DROP TABLE IF EXISTS ffba_pos_deploy_log CASCADE;

CREATE TABLE ffba_pos_deploy_log
(
   id                bigserial      NOT NULL,
   session_id        bigint         NOT NULL,
   deploy_id         integer        NOT NULL,
   path_id           integer        NOT NULL,
   status_id         smallint       NOT NULL,
   path              varchar(255),
   content_actual    text,
   error_text        text,
   event_dt          timestamptz    NOT NULL,
   CONSTRAINT ffba_pos_deploy_log_pk PRIMARY KEY (id),
   CONSTRAINT ffba_pos_deploy_log_session_id_fk FOREIGN KEY (session_id)
      REFERENCES ffba_pos_session (id) ON DELETE CASCADE ON UPDATE CASCADE,
   CONSTRAINT ffba_pos_deploy_log_path_id_fk FOREIGN KEY (path_id)
      REFERENCES ffba_pos_path (id) ON DELETE CASCADE ON UPDATE CASCADE,
   CONSTRAINT ffba_pos_deploy_log_deploy_id_fk FOREIGN KEY (deploy_id)
      REFERENCES ffba_pos_deploy (id) ON DELETE CASCADE ON UPDATE CASCADE
);

COMMIT;
