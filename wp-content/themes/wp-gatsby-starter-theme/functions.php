<?php

function wp_gatsby_starter_theme_scripts() {
    wp_enqueue_style('starter-theme-css', get_stylesheet_uri(), array(), '', 'all');
}
add_action( 'wp_enqueue_scripts', 'wp_gatsby_starter_theme_scripts' );

add_theme_support( 'custom-logo' );
add_theme_support( 'menus' );
add_theme_support( 'wp-block-styles' );
add_theme_support( 'align-wide' );