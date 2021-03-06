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
  },
  {
    "type": "GET",
    "url": "/api/paragraph?",
    "title": "Request paragraph",
    "name": "postImg",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Paragraph.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "read",
            "description": "<p>Can be set =True to remove binary data for readability.</p>"
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
            "description": "<p>Paragraph Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the paragraph.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the paragraph.</p>"
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
    "filename": "routes/api/paragraph.js",
    "group": "E__Programmering_gback_routes_api_paragraph_js",
    "groupTitle": "E__Programmering_gback_routes_api_paragraph_js"
  },
  {
    "type": "POST",
    "url": "/api/saveParagraph",
    "title": "Request paragraph",
    "name": "postImg",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Paragraph Id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Name of the Paragraph.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Name of the Paragraph.</p>"
          },
          {
            "group": "Success 200",
            "type": "Buffer",
            "optional": false,
            "field": "data",
            "description": "<p>The binary representation.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Paragraph.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentType",
            "description": "<p>File extension.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/api/paragraph.js",
    "group": "E__Programmering_gback_routes_api_paragraph_js",
    "groupTitle": "E__Programmering_gback_routes_api_paragraph_js"
  }
] });
