CREATE TABLE IF NOT EXISTS ffba_auth_user (
	id serial NOT NULL,
	username varchar(200) NOT NULL,
	password varchar(400) NOT NULL,
	email varchar(254) NOT NULL,
	is_superuser bool NOT NULL,
	is_active bool NOT NULL,
	is_staff bool NOT NULL,
	last_login timestamptz NULL,
	date_joined timestamptz NULL,
	CONSTRAINT ffba_auth_user_pkey PRIMARY KEY (id),
	CONSTRAINT ffba_auth_user_email_key UNIQUE (email),
	CONSTRAINT ffba_auth_user_username_key UNIQUE (username)
);


-- CREATE TABLE ffba_auth_ability (
-- 	id serial NOT NULL,
-- 	action_name varchar(255) NOT NULL,
-- 	object_type varchar(255) NOT NULL,
-- 	CONSTRAINT ffba_auth_user_pkey PRIMARY KEY (id),
-- 	CONSTRAINT auth_permission_content_type_id_fkey FOREIGN KEY (content_type_id) REFERENCES django_content_type(id) DEFERRABLE INITIALLY DEFERRED
-- );
-- CREATE INDEX auth_permission_417f1b1c ON public.auth_permission USING btree (content_type_id);
