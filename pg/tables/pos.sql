CREATE TABLE IF NOT EXISTS ffba_pos (
    id bigserial NOT NULL,
    ident varchar(100) NOT NULL,
    siteguid varchar(50),
    show_order varchar(100),
    local_db_name varchar(100),
    local_db_user varchar(100),
    local_db_pass varchar(100),
    last_open_dt timestamptz,
    CONSTRAINT ffba_pos_pk PRIMARY KEY (id),
    CONSTRAINT ffba_pos_ident_uk UNIQUE (ident),
    CONSTRAINT ffba_pos_siteguid_uk UNIQUE (siteguid)
);

CREATE TABLE IF NOT EXISTS ffba_pos_file (
    id bigserial NOT NULL,
    pos_id int4 NOT NULL,
    dir varchar(1000) NULL,
    file varchar(1000) NOT NULL,
    content text NOT NULL,
    content_actual text NULL,
    status varchar(10) NOT NULL,
    error varchar(1000) NULL,
    install_order varchar(50) NULL,
    note varchar(10000) NULL,
    last_modified_dt timestamptz NULL,
    CONSTRAINT ffba_pos_file_pk PRIMARY KEY (id),
    CONSTRAINT ffba_pos_file_pos_fk FOREIGN KEY (pos_id) REFERENCES ffba_pos(id) DEFERRABLE INITIALLY DEFERRED
);

CREATE INDEX ffba_pos_file_pos_fk_i ON ffba_pos_file USING btree (pos_id);
