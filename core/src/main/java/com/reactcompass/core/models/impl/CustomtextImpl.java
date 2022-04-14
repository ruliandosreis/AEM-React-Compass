/*

 * ***********************************************************************

 * Keepalive CONFIDENTIAL

 * ___________________

 *

 * Copyright 2022 Keepalive.

 * All Rights Reserved.

 *

 * NOTICE:  All information contained herein is, and remains the property

 * of Keepalive and its suppliers, if any. The intellectual and

 * technical concepts contained herein are proprietary to Keepalive

 * and its suppliers and are protected by trade secret or copyright law.

 * Dissemination of this information or reproduction of this material

 * is strictly forbidden unless prior written permission is obtained

 * from Keepalive.

 * ***********************************************************************

 */


package com.reactcompass.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactcompass.core.models.Customtext;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Customtext.class,
    ComponentExporter.class
}, resourceType = "reactcompass/components/customtext")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class CustomtextImpl
    implements Customtext
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    @Default (values="Type Text Here")
    private String text;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fontSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String color;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long fontWeight;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long margin;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fontFamily;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textAlign;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("text")
    public String getText() {
        return text;
    }

    @Override
    @JsonProperty("fontSize")
    public Long getFontSize() {
        return fontSize;
    }

    @Override
    @JsonProperty("color")
    public String getColor() {
        return color;
    }

    @Override
    @JsonProperty("weight")
    public Long getFontWeight() {
        return fontWeight;
    }

    @Override
    @JsonProperty("margin")
    public Long getMargin() {
        return margin;
    }

    @Override
    @JsonProperty("family")
    public String getFontFamily() {
        return fontFamily;
    }
    
    @Override
    @JsonProperty("textAlign")
    public String getTextAlign() {
        return textAlign;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
