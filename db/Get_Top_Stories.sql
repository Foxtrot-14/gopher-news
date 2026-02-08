SELECT
    c.id    AS centroid_id,
    c.size  AS centroid_size,
    n.title AS latest_title,
    n.created_at
FROM centroids c
JOIN news n
  ON n.centroid_id = c.id
WHERE c.size > 1
  AND DATE(c.created_at) = DATE(?)
  AND n.id = (
      SELECT n2.id
      FROM news n2
      WHERE n2.centroid_id = c.id
      ORDER BY n2.created_at DESC, n2.id DESC
      LIMIT 1
  )
ORDER BY c.size DESC;
