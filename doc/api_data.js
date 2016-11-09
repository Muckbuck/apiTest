define({ "api": [
  {
    "type": "get",
    "url": "/api/img?",
    "title": "Request image",
    "name": "getImg",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the image.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buffer",
            "description": "<p>Option for getting a rendered image.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "read",
            "description": "<p>Removing binary data for readability.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Image Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentType",
            "description": "<p>File extension.</p>"
          },
          {
            "group": "Success 200",
            "type": "Buffer",
            "optional": false,
            "field": "data",
            "description": "<p>The binary representation.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/img.js",
    "group": "E__Programmering_gback_routes_api_img_js",
    "groupTitle": "E__Programmering_gback_routes_api_img_js"
  },
  {
    "type": "POST",
    "url": "/api/img?",
    "title": "Request image",
    "name": "postImg",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the image.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buffer",
            "description": "<p>Option for getting a rendered image.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "read",
            "description": "<p>Removing binary data for readability.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Image Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the image.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentType",
            "description": "<p>File extension.</p>"
          },
          {
            "group": "Success 200",
            "type": "Buffer",
            "optional": false,
            "field": "data",
            "description": "<p>The binary representation.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/img.js",
    "group": "E__Programmering_gback_routes_api_img_js",
    "groupTitle": "E__Programmering_gback_routes_api_img_js"
  }
] });
