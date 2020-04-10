from os import path, makedirs
from flask import Flask


def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=path.join(app.instance_path, 'scheduler.sqlite')
    )

    try:
        makedirs(app.instance_path)
    except OSError:
        pass

    from . import db
    db.init_app(app)

    return app
