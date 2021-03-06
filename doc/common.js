// common.js:
// Euler Zero project, common javascript used by html doc files
//
// <copyright>
// This is a part of Euler Zero - see https://github.com/frasnian/euler-zero
// Copyright (c) 2015,2016 David Starr
//
// Distributed under the Boost Software License, Version 1.0. 
// (See accompanying file LICENSE_1_0.txt or copy at 
// http://www.boost.org/LICENSE_1_0.txt)
// </copyright>
//
function EulerZeroDefaults() {
  this.defaultCompiler = "";                                      // no preset default compiler  
  this.wikiRoot = "https://github.com/frasnian/euler-zero/wiki/"; // online wiki pages
  this.optCompilerExplorer = false;                               // checkbox default
  this.defaultDocHomeFrame = "dochome.html";                      // default doc home content frame
  this.defaultDocHomeObj = 'ltab_doc_home';                       // default doc home menu item
  return this;
};
var preferences = new EulerZeroDefaults();


function setTitle(sProblemNumber){
    document.title="Problem " +sProblemNumber+ " - Euler Zero";
}

var gProjectEulerRoot = "https://projecteuler.net/";
var peWindow = null;

function openProjectEulerRoot(){
    if(!peWindow || (peWindow && peWindow.closed)){
        peWindow = window.open(gProjectEulerRoot, 'pe_window');
    }
    else{
        peWindow.location.href = gProjectEulerRoot;
    }
    //peWindow.focus();
}

function openProjectEulerProblem(sProblemNumber){
    window.open(gProjectEulerRoot+ 'problem=' +toInteger(sProblemNumber), 'pe_window');
}

function showRequiredStandards(oRequiredStandards){
    var sOut = '<p><b>Required Standards:</b>';
    sOut += '<table style="margin-top:-.85em;margin-left:20px;">';

    for (var i = 0; i < supportedVariants.length; i++){
        var v = supportedVariants[i];
        sOut += "<tr><td>" +v.requiredStandard.toUpperCase() + "</td><td>(" +v.variantName+ ")</td></tr>";
    }
    sOut += "</table></p>";
    return sOut;
}

function pageAttributionContent(){
    var s = 
    '<p align="center" class="footer_notices"><a href="https://github.com/frasnian/euler-zero/wiki/License" target="_blank">Copyright &amp License Info</a> <b>&nbsp; | &nbsp;</b> <a href="https://github.com/frasnian/euler-zero/wiki/Contact-Info" target="_blank">Contact</a></p>'; 
    return s;
}

function pageHomeLinkContent(){
    return  '<br/><a href="../../doc/index.html" target="_top">Documentation Home</a>';
}

function docHomeLinkContent(){
    return  '<br/><a href="index.html">Documentation Home</a>';
}

function lookupCompilerInfoByTag(sCompilerTag){
    for (var i = 0; i < CompilerInformation.length; i++){
        var cInfo = CompilerInformation[i];
        if (CompilerInformation[i].ident == sCompilerTag){
            return cInfo;
        }
    }
    return "";
}

function pageBodyTitleContent(pageType)
{
    for (var i = 0; i < EulerZeroProblems.length; ++i){
        if (problemNumber == EulerZeroProblems[i].problemNumber){
            var sOut = "<h1>Euler Zero - Problem " +parseInt(problemNumber)
                     + " : " + EulerZeroProblems[i].name + '<span class="page_type_indicator">( ' +pageType+ " )</span>"
                     + "</h1>"
                ;
            return sOut; // break;
        }
    }  
}

function pageTopNavContent(pageType)
{
    var idx = -1;
    for (var i = 0; i < EulerZeroProblems.length; ++i){
        if (problemNumber == EulerZeroProblems[i].problemNumber){
            idx = i;
            break;
        }
    }
    if (idx == -1){
        return "";
    }

        //var myIdx = findProblem
    var oPrev = (idx > 0 ? EulerZeroProblems[idx - 1] : null);
    var oNext = (idx < EulerZeroProblems.length - 1 ? EulerZeroProblems[idx + 1] : null);
    var s = "";
    
    var switchTo = "";
    var switchToName = "";
    var switchToTitle = "";
    if (pageType == "readme"){
        switchTo = "detail";    
        switchToName = "Detail";
        switchToTitle = "Detail Page";
    }
    else{
        switchTo = "readme";
        switchToName = "Readme";
        switchToTitle = "Readme Page";
    }
    
  
       
    if(1){
        s += '<a href="ezp-' +switchTo+ '-' +problemNumber+ '.html" title="' +switchToTitle+ '">' +switchToName+ '</a>';
        s += "&nbsp;|&nbsp;";
        
// TODO: add source link back in + wrapper page. see full todo list
//        s += '<a href="ezp-source-' +problemNumber+ '.html" title="View solution source code">Source</a>';
//        s += "&nbsp;|&nbsp;";
        if (oPrev){
            s += '<a href="../problem' +oPrev.problemNumber+ '/ezp-' +pageType+'-' +oPrev.problemNumber+ '.html"'
            + ' title="Previous Solution\n(Problem ' +oPrev.problemNumber
            + ' - ' + oPrev.name
            + ')">Prev</a>'
            ;
        }
        else{
            s += '<font color="#A0A0A0" title="No previous solution">Prev</font>';
        }
        s += "&nbsp;|&nbsp;";

        if (oNext){
            s += '<a href="../problem' +oNext.problemNumber+ '/ezp-' +pageType+'-' +oNext.problemNumber+ '.html"'
            + ' title="Next Solution\n(Problem ' +oNext.problemNumber
            + ' - ' + oNext.name
            + ')">Next</a>'
            ;
        }
        else{
            s += '<font color="#A0A0A0" title="No next solution">Next</font>';
        }
    }
    else{ // TODO: real buttons; real images; add actual links
        s += "Detail | ";
        s += '<img src="../../doc/img/solutioncode.png" title="Solution source code"></img>';
       
        if (oPrev){
            s += '<img src="../../doc/img/arr-prev-active.png" title="Previous Solution"></img>';
        }
        else{
            s += '<img src="../../doc/img/arr-prev-inactive.png" title="No previous solution"></img>';
        }
        if (oNext){
            s += '<img src="../../doc/img/arr-next-active.png" title="Next Solution"></img>';
        }
        else{
            s += '<img src="../../doc/img/arr-next-inactive.png" title="No next solution"></img>';
        }
            
    }
    return s;
}
