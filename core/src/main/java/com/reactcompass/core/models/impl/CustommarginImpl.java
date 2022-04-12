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
import com.reactcompass.core.models.Custommargin;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Custommargin.class,
    ComponentExporter.class
}, resourceType = "reactcompass/components/custommargin")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class CustommarginImpl
    implements Custommargin
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long margin;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("margin")
    public Long getMargin() {
        return margin;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
