'use strict';

/**
 * translation-key service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::translation-key.translation-key');
