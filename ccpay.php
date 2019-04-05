<?php

/**
	*
	* @package PaymentPlugin
	*
	**/
	
/**
 *
 * Plugin Name: Payment Plugin
 * Plugin URI: 
 * Description: Front-end Payment Module for WordPress
 * Author: José Bernal, Trevor Uehlin, Jack Brainard
 * Author URI: https://clickpdx.com
 * Licence: GPLv2 or later
 * Text Domain: payment-plugin
 */
 
 
 /**
  *
  * https://codex.wordpress.org/Writing_a_Plugin
Readme File
If you want to host your Plugin on https://wordpress.org/plugins/, you need to create a readme.txt file within your plugin directory in a standardized format. You can use the automatic plugin 'readme.txt' generator.
	*/
	
	
$ccScriptPath;

$ccScriptDependencies;

$ccTranslations;





function ccInit(){
	// print "<h1>Hello World!</h1>";
	wp_register_script(
		"ccpay",
		plugin_dir_url(__FILE__)."lib/ccpay.js",
		array("jquery"),
		"0.1",
		true // include in footer
	);
	
	wp_enqueue_script("ccpay");
	// load_plugin_textdomain()
}

add_action("init","ccInit");




