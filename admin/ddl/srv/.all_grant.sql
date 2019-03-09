GRANT SELECT ON ffba_pos TO ffba_pos;

GRANT SELECT ON ffba_pos_package TO ffba_pos;

GRANT ALL ON ffba_pos_session TO ffba_pos;
GRANT USAGE, SELECT ON SEQUENCE ffba_pos_session_id_seq TO ffba_pos;

GRANT SELECT ON ffba_pos_path_type TO ffba_pos;

GRANT SELECT ON ffba_pos_path TO ffba_pos;

GRANT SELECT ON ffba_pos_deploy_status TO ffba_pos;

GRANT ALL ON ffba_pos_deploy TO ffba_pos;

GRANT ALL ON ffba_pos_deploy_log TO ffba_pos;
GRANT USAGE, SELECT ON SEQUENCE ffba_pos_deploy_log_id_seq TO ffba_pos;

GRANT SELECT ON ffba_pos_action_type TO ffba_pos;

GRANT SELECT ON ffba_pos_action TO ffba_pos;

GRANT SELECT ON ffba_pos_action_run_mode TO ffba_pos;

GRANT SELECT ON ffba_pos_action_run_status TO ffba_pos;

GRANT ALL ON ffba_pos_action_run TO ffba_pos;

GRANT ALL ON ffba_pos_action_run_log TO ffba_pos;
GRANT USAGE, SELECT ON SEQUENCE ffba_pos_action_run_log_id_seq TO ffba_pos;




GRANT ffba_pos TO ffba_eltapos_004;
