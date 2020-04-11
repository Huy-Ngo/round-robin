DROP TABLE IF EXISTS scheduler;
DROP TABLE IF EXISTS task;

CREATE TABLE scheduler (
    id INTEGER PRIMARY KEY,
    scheduler_name TEXT NOT NULL,
    default_duration INTEGER,
    elapsed_time INTEGER NOT NULL
);

CREATE TABLE task (
    id INTEGER PRIMARY KEY,
    task_name TEXT NOT NULL,
    duration INTEGER NOT NULL,
    is_current BOOLEAN NOT NULL DEFAULT FALSE,
    create_by INTEGER NOT NULL,
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (create_by) REFERENCES scheduler(id)
);