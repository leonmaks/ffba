import React from "react"
import { Link } from "react-router-dom"

// import Allow from "components/common/Allow"
import { sales } from "routes"


export default props => (
  <li className="nav-item">
    <Link className="nav-link" to={sales.TOP}>Sales</Link>
  </li>
)


//  <Allow group="sales">
//    <li className="nav-item">
//      <Link className="nav-link" to={ROUTE_SALES}>Sales</Link>
//    </li>
//  </Allow>




//            <a class="nav-link dropdown-toggle" href="#" id="sales_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{% trans "Sales" %}</a>
//            <div class="dropdown-menu" aria-labelledby="sales_dropdown">
//
//              {# {% if perms.prod.product_list %} #}
//              <a class="dropdown-item" href="{% url 'sales:sales' %}">{% trans "Sales New" %}</a>
//              {# {% endif %} #}
//
//              {# {% if perms.prod.product_list %} #}
//                <a class="dropdown-item" href="{% url 'sales:totals-by-date' %}">{% trans "Totals by Date (old)" %}</a>
//              {# {% endif %} #}
//
//              {% comment %}
//              {% if perms.prod.product_type_list %}
//                <a class="dropdown-item" href="{% url 'prod:product-type-list' %}">{% trans "Product Types" %}</a>
//              {% endif %}
//              {% endcomment %}
//
//            </div>
