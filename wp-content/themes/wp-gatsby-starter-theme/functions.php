<?php

function wp_gatsby_starter_theme_scripts() {
    wp_enqueue_style('style-name', get_stylesheet_uri());
    // wp_enqueue_script('script-name', get_template_directory_uri() . '/js/example.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'wp_gatsby_starter_theme_scripts' );

add_theme_support( 'custom-logo' );
add_theme_support( 'menus' );
add_theme_support( 'wp-block-styles' );
add_theme_support( 'align-wide' );