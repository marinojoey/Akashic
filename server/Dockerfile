FROM php:8.1-fpm

# Set working directory
WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y git zip

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Remove the default public folder of nginx
RUN rm -rf /var/www/html

# Copy composer.lock and composer.json
COPY composer.lock composer.json /var/www/

# Install dependencies
RUN composer install --no-scripts --no-autoloader --no-dev

# Copy existing application directory
COPY . /var/www

# Modify permissions to allow for writing to storage
# This was really hard to debug...
RUN chown -R www-data:www-data /var/www

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
