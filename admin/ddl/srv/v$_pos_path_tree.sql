DROP VIEW IF EXISTS v$_pos_path_tree CASCADE;

CREATE OR REPLACE
   VIEW v$_pos_path_tree AS
   WITH RECURSIVE path_tree AS (
      SELECT p0.id, p0.up_id, p0.package_id,
         p0.dir::text AS dir_last, p0.dir::text AS dir_full, p0.file,
         p0.type_id, p0.content, 0 depth,
         CASE
            WHEN p0.type_id = 1 THEN p0.up_id
            ELSE p0.id
         END AS dir_id
      FROM ffba_pos_path p0
      WHERE p0.package_id IS NOT NULL AND p0.up_id IS NULL
      UNION
      SELECT p1.id, p1.up_id, p.package_id,
         p1.dir, p.dir_full || E'\\' || p1.dir, p1.file,
         p1.type_id, p1.content, p.depth + 1,
         CASE
            WHEN p1.type_id = 1 THEN p1.up_id
            ELSE p1.id
         END
      FROM ffba_pos_path p1
      INNER JOIN path_tree AS p ON p1.up_id = p.id
   ) SELECT * FROM path_tree;

COMMIT;
