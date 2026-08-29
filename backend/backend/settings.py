from pathlib import Path
import environ
import os

# 1. Initialize environ
env = environ.Env(
    DEBUG=(bool, False)
)

# 2. Build paths inside the project
BASE_DIR = Path(__file__).resolve().parent.parent

# 3. THIS WAS MISSING: Tell Django to actually read the .env file
# It looks for the file named ".env" in your BASE_DIR (where manage.py is)
environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

# 4. Now these will work perfectly
SECRET_KEY = env('SECRET_KEY')
DEBUG = env('DEBUG')


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'corsheaders',
    'rest_framework',
    'ContactPage',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # MUST BE AT THE TOP
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


# Add your actual Vercel URL here

CORS_ALLOWED_ORIGINS = [
    "https://innocent-p-a1on.vercel.app",
    "https://innocoda.com",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "http://localhost:5173",
]

CORS_ALLOW_ALL_ORIGINS = True

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'


# Database
# https://docs.djangoproject.com/en/6.0/ref/settings/#databases

DATABASES = {
    'default': env.db('DATABASE_URL')
}


# Password validation
# https://docs.djangoproject.com/en/6.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/6.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/6.0/howto/static-files/

STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'


# Email Settings
# Email Settings (The "Golden" Configuration)
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True           # Use TLS for Port 587
EMAIL_USE_SSL = False          # Must be False for Port 587
EMAIL_HOST_USER = env('EMAIL_HOST_USER')
# Use 16-character App Password
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER


if not DEBUG:
    # Security headers
    SECURE_BROWSER_XSS_FILTER = True
    SECURE_CONTENT_TYPE_NOSNIFF = True
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
    SECURE_SSL_REDIRECT = True  # Forces HTTPS

    # Allowed Hosts (Update this once you get your Render URL)

    # Make sure your Render URL is in here!
    ALLOWED_HOSTS = [
        'innocent-portfolio-backend.onrender.com',
        'localhost',
        '127.0.0.1'
    ]
else:
    ALLOWED_HOSTS = ['*']  # Wide open for local development
