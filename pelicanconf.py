#!/usr/bin/env python3.8
# -*- coding: utf-8 -*- #


AUTHOR = "MarrekNozka"
SITENAME = "Chytrosti"
SITEURL = ""

PATH = "content"

THEME = "../elegant/"

TAG_CLOUD_STEPS = 6
TAG_CLOUD_MAX_ITEMS = 200

TIMEZONE = "Europe/Prague"
DEFAULT_LANG = "cs"
DEFAULT_DATE = "fs"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
# AUTHOR_FEED_ATOM = None
# AUTHOR_FEED_RSS = None

# PLUGIN_PATHS = ["../pelican-plugins"]
# PLUGINS = ["tipue_search", "seo", "jinja2content"]
# PLUGINS = ["tipue_search", "jinja2content"]
# JINJA2CONTENT_TEMPLATES = [".", "content"]

PLUGINS = ["tipue_search"]
# DIRECT_TEMPLATES = ["index", "authors", "categories", "tags", "archives"]
DIRECT_TEMPLATES = ["index", "categories", "tags", "archives"]
DIRECT_TEMPLATES += ["search"]

# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
    ("You can modify those links in your config file", "#"),
)

# Social widget
SOCIAL = (
    ("GitHub", "https://github.com/MarrekNozka"),
    ("GitHub", "https://github.com/spseol"),
    ("Twitter", "https://twitter.com/MarrekNozka"),
    ("Wikipedia", "http://cs.wikipedia.org/wiki/Wikipedista:Tlapicka"),
)

DEFAULT_PAGINATION = True
DEFAULT_PAGINATION = 12

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

MARKDOWN = {
    "extension_configs": {
        "markdown.extensions.codehilite": {"css_class": "highlight"},
        "markdown.extensions.extra": {},
        "markdown.extensions.meta": {},
        "markdown.extensions.toc": {},
    },
    "output_format": "html5",
}

USE_SHORTCUT_ICONS = True

STATIC_PATHS = ["extra", "src"]
STATIC_PATHS += ["theme/images", "theme/css", "images"]


DOCUTILS_SETTINGS = {
    "smart_quotes": "yes",
    "initial_header_level": 3,
}

EXTRA_PATH_METADATA = {
    "extra/README": {"path": "README.md"},
    "extra/.nojekyll": {"path": ".nojekyll"},
}

# PIWIK_URL = 'yanek.cz/piwik'
# PIWIK_SITE_ID = 6
