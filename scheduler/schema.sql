DROP TABLE IF EXISTS scheduler;
DROP TABLE IF EXISTS task;

CREATE TABLE scheduler (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    default_duration INTEGER,
    password_hash TEXT NOT NULL
);

CREATE TABLE task (
    id INTEGER PRIMARY KEY,
    task_name TEXT NOT NULL,
    duration INTEGER NOT NULL,
    create_by INTEGER NOT NULL,
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (create_by) REFERENCES scheduler(id)
);