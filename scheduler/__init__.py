from os import path, makedirs
from flask import Flask, redirect, url_for
from .db import init_app


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

    init_app(app)

    from . import blueprints
    app.register_blueprint(blueprints.bp)

    @app.route('/')
    def index():
        return redirect(url_for('scheduler.index'))

    return app
