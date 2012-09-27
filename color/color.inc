<?php

/**
 * @file
 * File to integrate color module.
 */

// Put the logo path into JavaScript for the live preview.
drupal_add_js(array('color' => array('logo' => theme_get_setting('logo', 'aura'))), 'setting');

$info = array(
  // Available colors and color labels used in theme.
  'fields' => array(
    'base' => t('Page bg'),
    'contentbg' => t('Content bg'),
    'joinbox' => t('Join Box'),
    'text' => t('Text'),
    'link' => t('Links'),
  ),
  // Pre-defined color schemes.
  'schemes' => array(
    'default' => array(
      'title' => t('Default'),
      'colors' => array(
        'base' => '#dedede',
    		'contentbg' => '#ffffff',
        'joinbox' => '#ffffff',
    		'text' => '#111111',
    		'link' => '#666666',
      ),
    ),
    'climate' => array(
      'title' => t('ComingSoon'),
      'colors' => array(
        'base' => '#a6d5d9',
    		'contentbg' => '#000000',
        'joinbox' => '#000000',
    		'text' => '#ffffff',
    		'link' => '#5a5fbf',
      ),
    ),
  ),

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => array(
    'css/colors.css',
  ),

  // Files to copy.
  'copy' => array(
    'logo.png',
  ),

  // Gradient definitions.
  'gradients' => array(
    array(
      // (x, y, width, height).
      'dimension' => array(0, 0, 0, 0),
      // Direction of gradient ('vertical' or 'horizontal').
      'direction' => 'vertical',
      // Keys of colors to use for the gradient.
      'colors' => array('top', 'bottom'),
    ),
  ),

  // Color areas to fill (x, y, width, height).
  'fill' => array(),

  // Coordinates of all the theme slices (x, y, width, height)
  // with their filename as used in the stylesheet.
  'slices' => array(),

  // Reference color used for blending. Matches the base.png's colors.
  'blend_target' => '#ffffff',

  // Preview files.
  'preview_css' => 'color/preview.css',
  'preview_js' => 'color/preview.js',
  'preview_html' => 'color/preview.html',

  // Base file for image generation.
  'base_image' => 'color/base.png',
);
