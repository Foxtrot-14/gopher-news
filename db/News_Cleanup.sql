DELETE FROM news
WHERE centroid_id IN (
    SELECT id FROM centroids WHERE created_at < ?
);
